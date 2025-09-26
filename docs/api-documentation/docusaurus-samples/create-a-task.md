import ApiBlock from '@site/src/components/ApiBlock';

# Create a task

Create a Jira task.

## HTTP request

<ApiBlock method="POST" link="/create/tasks" methodClass="methodBlock methodBlock_post"/>

## Request

### Path parameters

Doesn't require.

### Body parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | True | Task title. |
| completed | boolean | True | Task completion status. |

<details>
<summary>Sample request</summary>
```json
{
  "title": "Update Jira tickets",
  "completed": true
}
```
</details>

## Response

### Response parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | Task ID. |
| title | string | Task title. |
| completed | boolean | Task completion status. |

<details>
<summary>Sample response</summary>
```json
{
  "id": 1,
  "title": "Update Jira tickets",
  "completed": true
}
```
</details>
