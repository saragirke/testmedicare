<template>        
    <!-- mustascher för att hämta böckerna-->
    <!-- Eventlyssnare @-->
      <tr>
        <td v-bind:id="'productno' + vitamin.id" contenteditable>{{vitamin.productno}}</td>
        <td v-bind:id="'name' +vitamin.id" contenteditable>{{vitamin.name}}</td>
        <td v-bind:id="'category' +vitamin.id" contenteditable>{{vitamin.category}}</td>
        <td v-bind:id="'amount' +vitamin.id" contenteditable>{{vitamin.amount}}</td>
        <td v-bind:id="'price' +vitamin.id" contenteditable> {{vitamin.price}}</td>
        <td class="remove" @click="$emit('deleteVitamin')">Radera</td>
        <td class="remove" @click="$emit('updateVitamin')">Ändra</td>
      </tr> 
    </template>
    
    <!-- Tar emot böckerna som objekt-->
    <script> 
    export default {
        props: {
            vitamin: Object
        }
    }
    </script>
    
    