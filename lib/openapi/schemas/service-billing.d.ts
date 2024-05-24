/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/ballance/{address}": {
    /**
     * Get Wallet Balance
     * @description Retrieves wallet balance by public address
     */
    get: {
      parameters: {
        path: {
          /** @description Wallet public address */
          address: string;
        };
      };
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["WalletBalance"];
          };
        };
      };
    };
  };
  "/tokens": {
    /**
     * Get All Tokens
     * @description Retrieves all tokens
     */
    get: {
      parameters: {
        query?: {
          /** @description Maximum number of tokens to return */
          limit?: number;
          /** @description Number of tokens to skip */
          offset?: number;
          /** @description Field to sort by */
          orderBy?: string;
          /** @description Sort order (asc or desc) */
          order?: "asc" | "desc";
        };
      };
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["TokensList"];
          };
        };
      };
    };
    /**
     * Create Token
     * @description Creates a new token
     */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["TokenRequest"];
        };
      };
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["TokenResponse"];
          };
        };
        /** @description Token already exists */
        409: {
          content: {
            "application/json": components["schemas"]["TokenPost409Error"];
          };
        };
      };
    };
  };
  "/tokens/{id}": {
    /** Get Token by ID */
    get: operations["getTokenById"];
  };
  "/tokens/issue": {
    /**
     * Issue Token
     * @description Issues a token to a specific address
     */
    post: {
      requestBody: {
        content: {
          "application/json": {
            /** @description Symbol of the token (1-3 characters) */
            symbol: string;
            /** @description Address associated with the token issuance */
            address: string;
            /** @description Emission value for the token (1-10000000000) */
            emission: number;
            /** @description Signature for verification */
            signature: string;
          };
        };
      };
      responses: {
        /** @description Token issued successfully */
        200: {
          content: {
            "application/json": components["schemas"]["TransactionResponse"];
          };
        };
        /** @description Invalid signature */
        400: {
          content: {
            "application/json": {
              /** @description Error message indicating invalid signature */
              message?: string;
            };
          };
        };
        /** @description Token does not exist */
        404: {
          content: {
            "application/json": {
              /** @description Error message indicating token not found */
              message?: string;
            };
          };
        };
      };
    };
  };
  "/transactions": {
    /** Get Transactions */
    get: operations["getTransactions"];
    /**
     * Verify Signature and Perform Transaction
     * @description Verifies a signature and performs a transaction for a specific symbol
     */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["TransactionRequest"];
        };
      };
      responses: {
        /** @description Successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["TransactionResponse"];
          };
        };
        /** @description Bad request */
        400: {
          content: {
            "application/json": unknown;
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    MessageRequest: {
      privateKey: string;
      from: string;
      to: string;
      value: number;
      symbol: string;
    };
    /** @example 0x1234567890abcdef */
    SignedMessage: string;
    TokenRequest: {
      name: string;
      symbol: string;
      address?: string;
      emission: number;
      signature?: string;
    };
    TokenResponse: {
      _id?: string;
      name?: string;
      /** Format: date-time */
      timestamp?: string;
      address?: string;
      symbol?: string;
    };
    TokenPost409Error: {
      /** @example /forgot-password */
      url?: string;
      /** @example 409 */
      statusCode?: number;
      /** @example Validation Error */
      statusMessage?: string;
      /** @example Validation Error */
      message?: string;
    };
    TokensList: {
        _id?: string;
        name?: string;
        /** Format: date-time */
        timestamp?: string;
        address?: string;
        symbol?: string;
      }[];
    TransactionRequest: {
      from: string;
      to: string;
      value: number;
      signature: string;
      message?: string;
      /** @description Token symbol */
      symbol?: string;
    };
    TransactionResponse: {
      _id?: string;
      from?: string;
      to?: string;
      symbol?: string;
      /** Format: date-time */
      timestamp?: string;
      message?: string;
      value?: number;
    };
    Transaction: {
      _id?: string;
      from?: string;
      to?: string;
      symbol?: string;
      /** Format: date-time */
      timestamp?: string;
      message?: string;
      value?: number;
    };
    /** @description Balance by symbol */
    WalletBalance: {
      [key: string]: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Get Token by ID */
  getTokenById: {
    parameters: {
      path: {
        /** @description ID of the token to retrieve */
        id: string;
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["TokenResponse"];
        };
      };
    };
  };
  /** Get Transactions */
  getTransactions: {
    parameters: {
      query?: {
        /** @description Maximum number of transactions to return */
        limit?: number;
        /** @description Number of transactions to skip */
        offset?: number;
        /** @description Field to sort by */
        orderBy?: string;
        /** @description Sort order (asc or desc) */
        order?: "asc" | "desc";
        /** @description Filter transactions by symbol */
        symbol?: string;
        /** @description Filter transactions by address (to or from) */
        address?: string;
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["Transaction"][];
        };
      };
    };
  };
}
