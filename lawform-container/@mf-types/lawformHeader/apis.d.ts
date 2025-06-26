
    export type RemoteKeys = 'lawformHeader/App';
    type PackageType<T> = T extends 'lawformHeader/App' ? typeof import('lawformHeader/App') :any;