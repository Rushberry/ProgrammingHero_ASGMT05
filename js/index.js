/** Donation & History Page */

const donateHistory = document.getElementById('donate-history');
const dateAndTime = Date();

/** Noakhali Donation */
const noakhaliDonateBtn = document.getElementById('noakhali-donate-btn');
noakhaliDonateBtn.addEventListener('click', function () {
    const noakhaliDonateAmount = getInputFieldValueById('noakhali-donate-amount');
    let noakhaliBalance = getElementInnerValueById('noakhali-balance');
    let availableBalance = getElementInnerValueById('available-balance');
    if(noakhaliDonateAmount > availableBalance || noakhaliDonateAmount <= 0 || isNaN(noakhaliDonateAmount)){
        alert('Please enter a valid donation amount.')
    }
    else{
        my_modal_1.showModal()
        const newBalance = availableBalance - noakhaliDonateAmount;
        const newNoakhaliBalance = noakhaliBalance + noakhaliDonateAmount;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('bar-available-balance').innerText = newBalance;
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
        document.getElementById('noakhali-donate-amount').value = '';
        
        /** Adding History of Donation */
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex flex-col gap-4 border p-8 rounded-[16px]">
                        <h3 class="font-bold text-[20px]">${noakhaliDonateAmount} Taka is Donated for flood at Noakhali, Bangladesh</h3>
                        <p class="font-light text-[16px]">Date : ${dateAndTime}</p>
                    </div>`;
        donateHistory.appendChild(div);
    }
})

/** Feni Donation */
const feniDonateBtn = document.getElementById('feni-donate-btn');
feniDonateBtn.addEventListener('click', function () {
    const feniDonateAmount = getInputFieldValueById('feni-donate-amount');
    let feniBalance = getElementInnerValueById('feni-balance');
    let availableBalance = getElementInnerValueById('available-balance');
    if(feniDonateAmount > availableBalance || feniDonateAmount <= 0 || isNaN(feniDonateAmount)){
        alert('Please enter a valid donation amount.')
    }
    else{
        my_modal_1.showModal()
        const newBalance = availableBalance - feniDonateAmount;
        const newFeniBalance = feniBalance + feniDonateAmount;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('bar-available-balance').innerText = newBalance;
        document.getElementById('feni-balance').innerText = newFeniBalance;
        document.getElementById('feni-donate-amount').value = '';
        
        /** Adding History of Donation */
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex flex-col gap-4 border p-8 rounded-[16px]">
                        <h3 class="font-bold text-[20px]">${feniDonateAmount} Taka is Donated for flood relief in Feni,Bangladesh</h3>
                        <p class="font-light text-[16px]">Date : ${dateAndTime}</p>
                    </div>`;
        donateHistory.appendChild(div);
    }
})

/** Quota Protest Donation */
const quotaDonateBtn = document.getElementById('quota-donate-btn');
quotaDonateBtn.addEventListener('click', function () {
    const quotaDonateAmount = getInputFieldValueById('quota-donate-amount');
    let quotaBalance = getElementInnerValueById('quota-balance');
    let availableBalance = getElementInnerValueById('available-balance');
    if(quotaDonateAmount > availableBalance || quotaDonateAmount <= 0 || isNaN(quotaDonateAmount)){
        alert('Please enter a valid donation amount.')
    }
    else{
        my_modal_1.showModal()
        const newBalance = availableBalance - quotaDonateAmount;
        const newQuotaBalance = quotaBalance + quotaDonateAmount;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('bar-available-balance').innerText = newBalance;
        document.getElementById('quota-balance').innerText = newQuotaBalance;
        document.getElementById('quota-donate-amount').value = '';
        
        /** Adding History of Donation */
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex flex-col gap-4 border p-8 rounded-[16px]">
                        <h3 class="font-bold text-[20px]">${quotaDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement</h3>
                        <p class="font-light text-[16px]">Date : ${dateAndTime}</p>
                    </div>`;
        donateHistory.appendChild(div);
    }
})


/** Reusable Functions */

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getElementInnerValueById(id){
    const elementValue = document.getElementById(id).innerText;
    const elementNumber = parseFloat(elementValue);
    return elementNumber;
}

/** Toggle Active Status & Donation and History Button Functionality */
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donation = document.getElementById('donation');
const history = document.getElementById('history');

donationBtn.addEventListener('click', function (){
    historyBtn.classList.add('border', 'hover:bg-[#9e9d9d35]');
    historyBtn.classList.remove('bg-[#B4F461]', 'hover:bg-[#b4f461ba]');
    donationBtn.classList.add('bg-[#B4F461]', 'hover:bg-[#b4f461ba]');
    donationBtn.classList.remove('border', 'hover:bg-[#9e9d9d35]');
    history.classList.add('hidden');
    history.classList.remove('block');
    donation.classList.remove('hidden');
    donation.classList.add('block');
});

historyBtn.addEventListener('click', function (){
    donationBtn.classList.add('border', 'hover:bg-[#9e9d9d35]');
    donationBtn.classList.remove('bg-[#B4F461]', 'hover:bg-[#b4f461ba]');
    historyBtn.classList.add('bg-[#B4F461]', 'hover:bg-[#b4f461ba]');
    historyBtn.classList.remove('border', 'hover:bg-[#9e9d9d35]');
    donation.classList.add('hidden');
    donation.classList.remove('block');
    history.classList.remove('hidden');
    history.classList.add('block');
});

/** Redirecting to blog.html page */
document.getElementById('blog').addEventListener('click', function (){
    window.location.href = 'blog.html';
});

document.getElementById('blog-bar').addEventListener('click', function (){
    window.location.href = 'blog.html';
});
