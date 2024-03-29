/**
 * @module "ArgTemplateFactory" class
 * @description Creates arg templates
 */

import { ArgName } from "./argName.mjs";
import { ArgTemplateFactoryBase } from "fortah-core-library";
import { ArgTemplate } from "fortah-core-library";
import { DataType } from "fortah-core-library";

export class ArgTemplateFactory extends ArgTemplateFactoryBase {
    constructor() {
        super();
    }

    create() {
        const argTemplateArray = [
            new ArgTemplate(0, ArgName.sourceDirectoryPath, "Path to source directory", DataType.string, true),
            new ArgTemplate(1, ArgName.destinationDirectoryPath, "Path to destination directory", DataType.string, true)
        ];
        let argTemplates = super.create();
        argTemplates.insert(argTemplateArray);
        return argTemplates;
    }
}