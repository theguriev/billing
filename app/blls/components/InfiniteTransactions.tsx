"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Transaction from "@/app/blls/components/Transaction";
import useMounted from "@/app/hooks/useMounted";
import { components } from "@/lib/openapi/schemas/service-billing";

dayjs.extend(relativeTime);

type TransactionType = components["schemas"]["Transaction"];

interface InfiniteTransactionsProps {
  address?: string;
  symbol?: string;
  initialTransactions: TransactionType[];
}

const LIMIT = 10;

const InfiniteTransactions = ({
  address = "",
  symbol = "",
  initialTransactions = [],
}: InfiniteTransactionsProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>(initialTransactions);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(LIMIT);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const mounted = useMounted();

  const loadMoreTransactions = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("limit", LIMIT.toString());
      params.set("offset", offset.toString());
      if (address) {
        params.set("address", address);
      }
      if (symbol) {
        params.set("symbol", symbol);
      }

      const response = await fetch(`/api/transactions?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const newTransactions: TransactionType[] = await response.json();
      
      if (newTransactions.length < LIMIT) {
        setHasMore(false);
      }

      if (newTransactions.length > 0) {
        setTransactions(prev => [...prev, ...newTransactions]);
        setOffset(prev => prev + LIMIT);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more transactions:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, offset, address, symbol]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreTransactions();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreTransactions, hasMore, loading, mounted]);

  if (!mounted) {
    return (
      <div className="flex flex-col">
        {initialTransactions.map((transaction) => (
          <Transaction
            key={transaction._id}
            {...transaction}
            targetAddress={address}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction._id}
          {...transaction}
          targetAddress={address}
        />
      ))}
      
      {hasMore && (
        <div 
          ref={loadingRef}
          className="flex items-center justify-center py-4"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              <span className="text-sm text-muted-foreground">Loading more transactions...</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">Scroll down to load more</span>
          )}
        </div>
      )}
      
      {!hasMore && transactions.length > 0 && (
        <div className="flex items-center justify-center py-4">
          <span className="text-sm text-muted-foreground">No more transactions to load</span>
        </div>
      )}
    </div>
  );
};

export default InfiniteTransactions;
