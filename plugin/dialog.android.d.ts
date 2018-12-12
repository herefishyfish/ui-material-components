import { PromptResult, LoginResult } from "tns-core-modules/ui/dialogs";
export declare function alert(arg: any): Promise<void>;
export declare function confirm(arg: any): Promise<boolean>;
export declare function prompt(arg: any): Promise<PromptResult>;
export declare function login(arg: any): Promise<LoginResult>;
export declare function action(arg: any): Promise<string>;