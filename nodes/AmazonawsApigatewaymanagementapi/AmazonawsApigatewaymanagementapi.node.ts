import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsApigatewaymanagementapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amazonaws Apigatewaymanagementapi',
		name: 'N8nDevAmazonawsApigatewaymanagementapi',
		icon: { light: 'file:./amazonaws-apigatewaymanagementapi.png', dark: 'file:./amazonaws-apigatewaymanagementapi.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manage deployed APIs\' runtime via SDK endpoint configuration.',
		defaults: { name: 'Amazonaws Apigatewaymanagementapi' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsApigatewaymanagementapiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
