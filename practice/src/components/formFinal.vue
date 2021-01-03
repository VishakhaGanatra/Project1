<template>
  <base-card>
    <h2>Personal details</h2>
    firstName: {{ form1Data.firstName.val }}<br />
    LastName : {{ form1Data.lastName.val }}<br />
    Description : {{ form1Data.description.val }}<br />
    Areas : {{ form1Data.areas.val }}<br /><br /><br />
    <h2>Contact details</h2>
    Phone No : {{ form2Data.enteredvalue.val }}<br />
    Emergency No : {{ form2Data.enterednumber.val }}<br />
    Email : {{ form2Data.enteredemail.val }}<br /><br />
    <h2>Job details</h2>
    Employee Name : {{ form3Data.enteredname.val }}<br />
    Employee Id : {{ form3Data.enteredvalue.val }}<br />
    Employee Email : {{ form3Data.enteredemail.val }}<br />
    Areas : {{ form3Data.areas.val }}
  </base-card>
</template>

<script>
export default {
  props: ["form1Data", "form2Data", "form3Data"],
};
</script>
