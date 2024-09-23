function donation(id) {
  
    return parseFloat(document.getElementById(id).value)
    
}


//  history item

function createDiv() {
    
}



document.getElementById('donation-now').addEventListener('click', function(){
    const donationAmount = donation('donation-amount');
    document.getElementById('add-balance').innerText=donationAmount. toFixed(2);

    const amount= parseFloat(document.getElementById('amount').innerText) ;
    document.getElementById('donation-amount').value='';
    if (donationAmount <=0 || isNaN(donationAmount) ) {
        alert('⚠️ Invalid Amount!')
       
     }else if (amount<donationAmount2) {
        alert('⚠️ Balance Low!')
    }
      else{
        const total = amount-donationAmount;
   
    document.getElementById('amount').innerText= total.toFixed(2);
    const container=document.getElementById('history-section');
    const title = document.getElementById('noakhali-title').innerText;
    const createDiv =  document.createElement("div");
  createDiv.classList.add('border', 'rounded-xl', 'space-y-2', 'p-5')
    createDiv.innerHTML=`<h2 class='text-xl'>${donationAmount}Taka is ${title}</h2>
    <p class="">Date:${new Date()}</p>
    `
    container.appendChild(createDiv);

  my_modal_1.showModal();
     }
    
   

 
 // history-item



    
})
document.getElementById('donation-now2').addEventListener('click', function(){
    const donationAmount2 = donation('donation-amount2');
    
    document.getElementById('add-balance2').innerText=donationAmount2.toFixed(2);
    document.getElementById('donation-amount2').value='';
    const amount= parseFloat(document.getElementById('amount').innerText) ;
    if (donationAmount2 <=0 || isNaN(donationAmount2)) {
        alert('⚠️ Invalid Amount!')
        
    }else if (amount<donationAmount2) {
        alert('⚠️ Balance Low!')
    }else if (amount<donationAmount2) {
        alert('⚠️ Balance Low!')
    }
    else{
        const total = amount-donationAmount2;

    document.getElementById('amount').innerText= total.toFixed(2);

    const container=document.getElementById('history-section');
    const title = document.getElementById('feni-title').innerText;
    const createDiv =  document.createElement("div");
  createDiv.classList.add('border', 'rounded-xl', 'space-y-2', 'p-5')
    createDiv.innerHTML=`<h2 class='text-xl'>${donationAmount2}Taka is ${title}</h2>
    <p class="">Date:${new Date()}</p>
    `
    container.appendChild(createDiv);

    my_modal_1.showModal()
    }
    
  
    document.getElementById('amount').innerText= total.toFixed(2);
   

    
})
document.getElementById('donation-now3').addEventListener('click', function(){
    const donationAmount3 = donation('donation-amount3');
    document.getElementById('add-balance3').innerText=donationAmount3.toFixed(2);
    document.getElementById('donation-amount3').value='';
    const amount= parseFloat(document.getElementById('amount').innerText) ;
    if (donationAmount3 <=0 || isNaN(donationAmount3)) {
        alert('⚠️ Invalid Amount!')
      
    }else{
        const total = amount-donationAmount3;
  
        document.getElementById('amount').innerText= total.toFixed(2);
    
        const container=document.getElementById('history-section');
        const title = document.getElementById('title').innerText;
        const createDiv =  document.createElement("div");
      createDiv.classList.add('border', 'rounded-xl', 'space-y-2', 'p-5')
        createDiv.innerHTML=`<h2 class='text-xl'>${donationAmount3}Taka is ${title}</h2>
        <p class="">Date:${new Date()}</p>
        `
        container.appendChild(createDiv);
    
        my_modal_1.showModal()
    }
   

    


})



// history tab

const donationTab = document.getElementById('donation');
const historyTab = document.getElementById('history');
historyTab.addEventListener('click', function(){
    
    historyTab.classList.add(
        "bg-lime-300",
        'text-black'
    )
    historyTab.classList.remove('bg-white');
    donationTab.classList.add(
        'bg-white',
        'text-gray-400'
    )
    donationTab.classList.remove('bg-lime-300')
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});
donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        "bg-lime-300",
    )
    donationTab.classList.remove('bg-white','text-gray-400')
    historyTab.classList.add(
        'bg-white',
        'text-gray-400'
    )
    historyTab.classList.remove('bg-lime-300')
    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
})

