---
id: transactions
title: Transactions
---

After getting a response from Pay endpoint you can use this endpoint to fetch informations about the transaction such as status, transaction id , total amount paid, ETC...

## REQUEST

### testing server:

```http
GET https://staging.xpay.app/api/communities/{community_id}/transactions/{transaction_uuid}/
```

### production(Live) server:

```http
GET https://community.xpay.app/api/communities/{community_id}/transactions/{transaction_uuid}/
```

## Parameters

### Path parameters

#### Required Properties

| Property name    | Value  | Description                                     | Notes                                                         |
| ---------------- | ------ | ----------------------------------------------- | ------------------------------------------------------------- |
| community_id     | string | ID that references prefrences to your community | value that your community recieved from XPay                  |
| transaction_uuid | string | UUID of the transaction to be fetched           | you usually have this value from the response of PAY endpoint |

## Request body

    Do not supply a request body.

## Response body

If successful, this method returns a response body with the following structure:

```json
{
  "status": {
    "code": integer,
    "message": string,
    "errors": []
  },
  "data": {
    "created": string,
    "id": integer,
    "uuid": string,
    "total_amount_piasters": integer,
    "status": string
  },
  "count": integer,
  "next": string,
  "previous": string
}
```

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request body-->

```json

```

<!--Request body-->

```json
{
  "status": {
    "code": 200,
    "message": "success",
    "errors": []
  },
  "data": {
    "created": "2020-05-10T14:20:11.855539+02:00",
    "id": 3517,
    "uuid": "452ecb4d-3b6e-4a94-af82-f3ffd21c7e0f",
    "total_amount_piasters": 5000,
    "status": "SUCCESSFUL"
  },
  "count": null,
  "next": null,
  "previous": null
}
```

<!--END_DOCUSAURUS_CODE_TABS-->