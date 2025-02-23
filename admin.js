
let shops = 0;
let activePromo = 0;
let inventory = 0;  // Corrected variable name to match ID

function updateBoard() {
    document.getElementById('shopsCount').textContent = shops;
    document.getElementById('activePromoCount').textContent = activePromo;
    document.getElementById('inventoryCount').textContent = inventory; 
}

updateBoard();

document.getElementById('updateButton').addEventListener('click', () => {
    shops = parseFloat(document.getElementById('inputShops').value) || shops;
    activePromo = parseInt(document.getElementById('inputActivePromo').value) || activePromo;
    inventory = parseInt(document.getElementById('inputInventory').value) || inventory;

    updateBoard();
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.department-bx').forEach(box => {
        const showIcon = box.querySelector('.bx-chevron-up');
        const closeIcon = box.querySelector('.bx-x');

        if (showIcon && closeIcon) {
            showIcon.addEventListener("click", function () {
                box.classList.add("active");
            });

            closeIcon.addEventListener("click", function () {
                box.classList.remove("active");
            });
        }
    });
});
let permanentEmployees = [
    { name: "Alice Johnson", position: "Manager" },
    { name: "Michael Smith", position: "HR" },
    { name: "Sarah Williams", position: "Cashier" },
    { name: "David Brown", position: "Security" },
    { name: "Emma Davis", position: "IT Support" }
];

function renderEmployees() {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";
    permanentEmployees.forEach((emp, index) => {
        table.innerHTML += `
            <tr>
                <td><img src="https://i.pravatar.cc/100?img=${index + 10}" width="50"></td>
                <td>${emp.name}</td>
                <td>${emp.position}</td>
            </tr>
        `;
    });
}

renderEmployees();


let number=document.getElementById('number');
let counter=0;
setInterval(() => {
    if(counter==65){
        clearInterval()
    }
    else{
        counter++;
        number.innerHTML=counter ;
        number.style.width=counter ;
        
        number.style.color= `hsl(${counter * 3}, 100%, 50%)`;
    }
    },30);

    let number1=document.getElementById('number1');
let counter1=0;
setInterval(() => {
    if(counter1==65){
        clearInterval()
    }
    else{
        counter1++;
        number1.innerHTML=counter1 ;
        number1.style.width=counter1 ;
        
        number1.style.color= `hsl(${counter1 * 3}, 100%, 50%)`;
    }
    },30); 
//leafletjs
 // Initialize the map
 const map = L.map('map').setView([20, 0], 2); // Centered globally

 // Add a tile layer (map background)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map);

 // Import locations and products
 const importData = [
     { country: "China", coords: [35.8617, 104.1954], products: "Electronics, Toys, Clothing" },
     { country: "Germany", coords: [51.1657, 10.4515], products: "Automobiles, Machinery" },
     { country: "USA", coords: [37.0902, -95.7129], products: "Software, Luxury Goods" },
     { country: "India", coords: [20.5937, 78.9629], products: "Textiles, Spices, Jewelry" },
     { country: "Brazil", coords: [-14.235, -51.9253], products: "Coffee, Fruits, Leather Goods" }
 ];

 // Add markers to the map
 importData.forEach(location => {
     L.marker(location.coords)
         .addTo(map)
         .bindPopup(`<b>${location.country}</b><br>Imports: ${location.products}`);
 });