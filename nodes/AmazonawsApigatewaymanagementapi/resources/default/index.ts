import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Delete Connection",
					"value": "Delete Connection",
					"action": "Delete Connection",
					"description": "Delete the connection with the provided id.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/@connections/{{$parameter[\"connectionId\"]}}"
						}
					}
				},
				{
					"name": "Get Connection",
					"value": "Get Connection",
					"action": "Get Connection",
					"description": "Get information about the connection with the provided id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/@connections/{{$parameter[\"connectionId\"]}}"
						}
					}
				},
				{
					"name": "Post To Connection",
					"value": "Post To Connection",
					"action": "Post To Connection",
					"description": "Sends the provided data to the specified connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/@connections/{{$parameter[\"connectionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /@connections/{connectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "Connection ID",
			"name": "connectionId",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /@connections/{connectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Connection"
					]
				}
			}
		},
		{
			"displayName": "Connection ID",
			"name": "connectionId",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /@connections/{connectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Post To Connection"
					]
				}
			}
		},
		{
			"displayName": "Connection ID",
			"name": "connectionId",
			"required": true,
			"description": "The identifier of the connection that a specific client is using.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Post To Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "string",
			"default": "",
			"description": "The data to be sent to the client specified by its connection id.",
			"routing": {
				"send": {
					"property": "Data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Post To Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Post To Connection"
					]
				}
			}
		},
];
