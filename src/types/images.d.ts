declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png" {
    const value: any;
    export = value;
}
