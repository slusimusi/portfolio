import ApiBlock from '@site/src/components/ApiBlock';

# Update a task

Update a Jira task.

## HTTP request

<ApiBlock method="PUT" link="/update/{id}" methodClass="methodBlock methodBlock_put"/>

## Request

### Path parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | True | Task ID. |

### Body parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | False | Task title. |
| completed | boolean | False | Task completion status. |

<details>
<summary>Sample request</summary>
```json
{
  "completed": false
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
  "completed": false
}
```
</details>
