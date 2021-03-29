import { Response, Request, NextFunction } from 'express';
export declare const store: (request: Request, response: Response, next: NextFunction) => Promise<void>;
