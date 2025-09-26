import ApiBlock from '@site/src/components/ApiBlock';

# Delete a task

Delete a Jira task.

## HTTP request

<ApiBlock method="DELETE" link="/delete/{id}" methodClass="methodBlock methodBlock_delete"/>

## Request

### Path parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | True | Task ID. |

### Body parameters

Doesn't require.

## Response

### Response parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | boolean | Is `true` if the task was deleted. |

<details>
<summary>Sample response</summary>
```json
{
  "success": true
}
```
</details>
