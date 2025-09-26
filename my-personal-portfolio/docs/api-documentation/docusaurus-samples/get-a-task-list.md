import ApiBlock from '@site/src/components/ApiBlock';

# Get a task list

Get a list of Jira tasks.

## HTTP request

<ApiBlock method="GET" link="/create/tasks" methodClass="methodBlock methodBlock_get"/>

## Request

### Body parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filters | object | False | Object with filters |

`filters` object schema:

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | False | Task ID. |
| title | string | False | Task title. |
| completed | boolean | False | Task completion status. |
| limit | integer | False | Number of records to retrieve. By default, 10. The maximum is 100. |
| offset | integer | False | Records cursor. |

<details>
<summary>Sample request</summary>
```json
{
  "filters": {
    "completed": true,
    "limit": 3
  }
}
```
</details>

## Response

### Response parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tasks | array of objects `task` | Array with Jira tasks. |

`task` object schema:

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | Task ID. |
| title | string | Task title. |
| completed | boolean | Task completion status. |

<details>
<summary>Sample response</summary>
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Update Jira tickets",
      "completed": true
    },
    {
      "id": 3,
      "title": "Refactor the React component",
      "completed": true
    },
    {
      "id": 7,
      "title": "Create a MVP",
      "completed": true
    }
  ]
}
```
</details>
