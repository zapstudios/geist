/**
 *
 * @param xml xml string
 */
const parseXml: (xml: string) => any = (xml: string): any => {
    const stack: any[] = [];
    let current: any = null;

    xml.replace(/<(\w+)([^>]*)\/?>|<\/(\w+)>/g, (match, startTag, attributes, endTag) => {
        if (startTag) {
            const node: any = {
                tag: startTag,
                attributes: {},
                children: []
            };
            const attrRegex = /(\w+)\s*=\s*["']([^"']*)["']/g;
            let attrMatch;
            while ((attrMatch = attrRegex.exec(attributes))) {
                node.attributes[attrMatch[1]] = attrMatch[2];
            }

            if (current) {
                current.children.push(node);
            }
            stack.push(node);
            current = node;
        } else if (endTag) {
            stack.pop();
            current = stack[stack.length - 1] || null;
        }

        return '';
    });

    return stack[0] || null;
}

/**
 *
 * @param node
 */
const convertNodeToJson: (node: any) => any = (node: any): any => {
    const jsonNode: Record<string, any> = {};

    if (Object.keys(node.attributes).length > 0) {
        jsonNode['_attributes'] = node.attributes;
    }

    if (node.children.length > 0) {
        for (const child of node.children) {
            if (!(child.tag in jsonNode)) {
                jsonNode[child.tag] = [];
            }
            jsonNode[child.tag].push(convertNodeToJson(child));
        }
    } else {
        jsonNode['_value'] = '';
    }

    return jsonNode;
}

/**
 * @param xml xml string
 */
const xmlToJson: (xml: string) => any = (xml: string): any => {
    const rootNode = parseXml(xml);
    if (rootNode) {
        return convertNodeToJson(rootNode);
    }
    return null;
}

/**
 * xml to json mapper
 * */
export const GeistXMLMapper = {
    xmlToJson
}
