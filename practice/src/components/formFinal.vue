<template>
<base-card>
firstName: {{form1Data.firstName}}<br>
LastName : {{form1Data.lastName}}<br>
Description : {{form1Data.description}}<br>
Areas : {{form1Data.areas}}<br>
<p>{{form2Data}}</p>
<p>{{form3Data}}</p>

</base-card>
</template>

<script>
export default{
props: ['form1Data','form2Data','form3Data']
}
</script>