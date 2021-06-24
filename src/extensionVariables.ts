import { KubeConfig } from "@kubernetes/client-node";
import { ExtensionContext } from "vscode";
import { TiltDevV1alpha1Api } from "./gen/api";

export namespace ext {
    export let context: ExtensionContext;

    export let config: KubeConfig;

    export let client: TiltDevV1alpha1Api;
}
