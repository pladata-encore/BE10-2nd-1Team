
    export type RemoteKeys = 'lawformFooterApp/App';
    type PackageType<T> = T extends 'lawformFooterApp/App' ? typeof import('lawformFooterApp/App') :any;