
    export type RemoteKeys = 'lawformHeaderApp/App';
    type PackageType<T> = T extends 'lawformHeaderApp/App' ? typeof import('lawformHeaderApp/App') :any;