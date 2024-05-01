import Token from 'class/Token';

enum Version {
    V2,
    V3,
}

enum Action {
    Buy,
    Sell,
}

type SwapRequest = {
    action: Action;
    amountIn: number;
    token: Token;
};

type ExactInputSingleParams = {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    deadline: number;
    amountIn: string;
    amountOutMinimum: string;
    sqrtPriceLimitX96: number;
};

export { Version, Action, SwapRequest, ExactInputSingleParams };
