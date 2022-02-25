declare namespace Express { // https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
  export interface Request {
    user: {
      id: number;
      username: string;
    }
  }
}

/*
Ref adicionais:

https://www.typescriptlang.org/docs/handbook/declaration-merging.html

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts

*/