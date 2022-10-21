
<template>

    <p>Vitaminer</p>

    <p id="error"> </p>
<table>

    <tr>
        <th>Prudoktnr</th>
        <th>Namn</th>
        <th>Kategori</th>
        <th>Antal</th>
        <th>Pris</th>
        <th>Hantera</th>
        <th>Hantera</th>
    </tr>
    <Vitamin @deleteVitamin="deleteVitamin(vitamin.id)" @updateVitamin="updateVitamin(vitamin.id)" v-for="vitamin in vitamins" :vitamin="vitamin" :key="vitamin.id" />


</table>
<br><br>
<!-- <AddVitamin @vitaminAdded="getBook()" /> -->

</template>

<script>
import Vitamin from "../components/Vitamin.vue";
//import AddBook from "../components/AddBook.vue";

export default {

    // Reaktiv data
    data() {
        return {
            vitamins: []
        }
    },

    components: {
        Vitamin
    },

    //Funktioner
    methods: {
    //GET books
    async getVitamins() {

        //Fetch till restwebbtjänst
        const resp = await fetch("http://localhost:8000/api/vitamins"); 

        // När vi fått svar från webbtjänsten ska data lagras
        const data = await resp.json();

        this.vitamins = data;
},

    //Radera
   async deleteVitamin(id){
        const resp = await fetch("http://localhost:8000/api/vitamins/" + id, {
            //Deleteanrop
            method: "DELETE",
            //Headers
            headers:{
                "Accept": "application json",
                "Content-Type": "application/json"

            }
        });

        const data = await resp.json();

        //Läs in böcker på nytt
        this.getVitamins();
   },

async updateVitamin(id) {


if(this.productno != 0 & this.name != 0 & this.category != 0 & this.amount != 0 & this.price != 0) { 

// Hämtar innehåll i td-element 
let vitproductno= document.getElementById("productno" + id).innerHTML;
let vitname= document.getElementById("name"+ id).innerHTML;
let vitcategory= document.getElementById("category" + id).innerHTML;
let vitamount= document.getElementById("amount" + id).innerHTML;
let vitprice= document.getElementById("price" + id).innerHTML; 


        //Javascript objekt
        let vitBody = {
        productno: vitproductno,
        name: vitname,
        category: vitcategory,
        amount: vitamount,
        price: vitprice
    }; 

const resp = await fetch("http://localhost:8000/api/vitamins/" + id, {

method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(vitBody)


});
const data = await resp.json();

document.getElementById("error").innerHTML = "Ändrad!";
console.log(vitBody);

}else {
    document.getElementById("error").innerHTML = "Alla fält måste vara ifyllda!";
} 

},        
    }, 
    mounted() {
        this.getVitamins();
    }
}

</script>

<style scoped>
    h1 {
        text-align: center;
        font-family: 'Quicksand', sans-serif;
    }

    p {
        font-family: 'Quicksand', sans-serif;
        text-align: center;
    }
    div {
    overflow-x:auto;
}
</style>