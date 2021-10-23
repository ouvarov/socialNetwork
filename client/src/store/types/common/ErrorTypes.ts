export type ErrorTypes = {
    errorMessages: Array<string>;
};

export type ErrorActionTypes = {
    type: string;
    data: string;
};
export type ErrorSagaTypes = {
    type: string;
    action: { data: { message: string } };
};
