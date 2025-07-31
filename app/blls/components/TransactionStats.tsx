import { TrendingUp, Users, Coins, BarChart3, Activity, Crown, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/openapi/apiClient";

const formatValue = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toLocaleString('ru-RU').replace(/,/g, ' ');
};

const formatDecimal = (value: number, decimals: number = 2) => {
  return value.toLocaleString('ru-RU', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  }).replace(/,/g, ' ');
};

const TransactionStats = async ({ address }: {
  address?: string;
}) => {
  const request = await api.billing("/transactions/stats", "get", {
    next: { tags: ["transaction-stats"] },
    cache: "no-cache",
    query: { address },
  });
  const stats = request.ok ? await request.json() : null;

  if (!stats) {
    return null;
  }

  // Извлекаем данные из структуры stats
  const total = stats.total || {};
  const bySymbol = stats.bySymbol || [];
  const topSenders = stats.topSenders || [];
  const topReceivers = stats.topReceivers || [];
  const daily = stats.daily || [];

  // Сортируем дневную статистику по дате (последние дни)
  const sortedDaily = daily
    .sort((a: any, b: any) => new Date(a._id).getTime() - new Date(b._id).getTime())
    .slice(-7); // Последние 7 дней

  // Находим максимальное значение для нормализации высоты баров
  const maxDailyValue = Math.max(...sortedDaily.map((day: any) => day.count || 0));

  return (
    <div className="space-y-6">
      {/* Основные метрики */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Volume
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatValue(total.totalValue || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatValue(total.totalTransactions || 0)} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Value</CardTitle>
            <BarChart3 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatDecimal(total.avgValue || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Min: {formatDecimal(total.minValue || 0)} • Max: {formatDecimal(total.maxValue || 0)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Senders</CardTitle>
            <Crown className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {topSenders.length}
            </div>
            <p className="text-xs text-muted-foreground">
              {topSenders[0] ? `Leader: ${formatValue(topSenders[0].count || 0)} txs` : 'No data'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Types</CardTitle>
            <Coins className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bySymbol.length}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {bySymbol.slice(0, 2).map((item: any) => (
                <Badge key={item._id} variant="secondary" className="text-xs">
                  {item._id}
                </Badge>
              ))}
              {bySymbol.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{bySymbol.length - 2}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* График дневной активности */}
      {sortedDaily.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Daily Activity</CardTitle>
              <Activity className="size-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Transaction volume over the last {sortedDaily.length} days
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex h-32 items-end justify-between gap-2">
              {sortedDaily.map((day: any, index: number) => {
                const height = maxDailyValue > 0 ? (day.count / maxDailyValue) * 100 : 0;
                const date = new Date(day._id);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                
                return (
                  <div key={day._id} className="flex flex-1 flex-col items-center">
                    <div className="mb-2 flex h-24 w-full flex-col justify-end">
                      <div 
                        className="w-full rounded-t bg-primary transition-all duration-300 hover:bg-primary/80"
                        style={{ height: `${height}%`, minHeight: height > 0 ? '4px' : '0px' }}
                        title={`${day.count} transactions on ${day._id}`}
                      />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {dayName}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {day.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Детальная статистика по токенам */}
      {bySymbol.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Token Statistics</CardTitle>
            <p className="text-sm text-muted-foreground">
              Transaction volume by token type
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {bySymbol.slice(0, 5).map((token: any) => (
                <div key={token._id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {token._id}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {formatValue(token.count || 0)} transactions
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {formatValue(token.totalValue || 0)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      avg: {formatDecimal(token.avgValue || 0)}
                    </div>
                  </div>
                </div>
              ))}
              {bySymbol.length > 5 && (
                <div className="pt-2 text-center">
                  <Badge variant="secondary" className="text-xs">
                    +{bySymbol.length - 5} more tokens
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Топ пользователи */}
      {(topSenders.length > 0 || topReceivers.length > 0) && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Топ отправители */}
          {topSenders.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                  <Zap className="size-4" />
                  Top Senders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topSenders.slice(0, 3).map((sender: any, index: number) => (
                    <div key={sender._id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                          {index + 1}
                        </div>
                        <div className="font-mono text-sm">
                          {sender._id?.slice(0, 8)}...{sender._id?.slice(-4)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {formatValue(sender.count || 0)} txs
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatValue(sender.totalSent || 0)} total
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Топ получатели */}
          {topReceivers.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                  <TrendingUp className="size-4" />
                  Top Receivers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topReceivers.slice(0, 3).map((receiver: any, index: number) => (
                    <div key={receiver._id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-6 items-center justify-center rounded-full bg-green-500/10 text-xs font-medium">
                          {index + 1}
                        </div>
                        <div className="font-mono text-sm">
                          {receiver._id?.slice(0, 8)}...{receiver._id?.slice(-4)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {formatValue(receiver.count || 0)} txs
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatValue(receiver.totalReceived || 0)} total
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionStats;
