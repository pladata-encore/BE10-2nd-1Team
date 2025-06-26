
    export type RemoteKeys = 'modalTestApp/App';
    type PackageType<T> = T extends 'modalTestApp/App' ? typeof import('modalTestApp/App') :any;