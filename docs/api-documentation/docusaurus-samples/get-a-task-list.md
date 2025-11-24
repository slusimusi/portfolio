import ApiBlock from '@site/src/components/ApiBlock';

# Get a task list

Get a list of Jira tasks.

## HTTP request

<ApiBlock method="GET" link="/create/tasks" methodClass="methodBlock methodBlock_get"/>

## Request

### Path parameters

Doesn't require.

### Body parameters

Doesn't require.

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
