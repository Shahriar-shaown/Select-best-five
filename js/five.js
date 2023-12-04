
function addPlayerToUI(playerId) {
    const ulElement = document.getElementById('all');

    // Check if there are already five players in the list
    if (ulElement.children.length >= 5) {
        alert("You can only select up to five players.");
        return; // Stop further execution
    }

    const liElement = document.createElement('li');
    
    // Get the player name by ID
    const playerName = document.getElementById(playerId).innerText;
    
    // Set the text content of the new list item
    liElement.innerText = playerName;

    // Append the new list item to the unordered list
    ulElement.appendChild(liElement);
}

function handleClicked(ElementId){
    const button = document.getElementById(ElementId);
    button.disabled = true;
}

document.getElementById('btn-felix').addEventListener('click', function () {
    addPlayerToUI('felix');
    handleClicked('btn-felix')
});

document.getElementById('btn-iniesta').addEventListener('click', function () {
    addPlayerToUI('iniesta');
    handleClicked('btn-iniesta')
});

document.getElementById('btn-messi').addEventListener('click', function () {
    addPlayerToUI('messi');
    handleClicked('btn-messi')
});

document.getElementById('btn-neymar').addEventListener('click', function () {
    addPlayerToUI('neymar');
    handleClicked('btn-neymar')
});

document.getElementById('btn-ron').addEventListener('click', function () {
    addPlayerToUI('ron');
    handleClicked('btn-ron')
});

document.getElementById('btn-suarez').addEventListener('click', function () {
    addPlayerToUI('suarez');
    handleClicked('btn-suarez')
});


document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerCostString = document.getElementById('Per-player-cost').value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    const playerExpensesField = document.getElementById('player-expenses');

    const ulElement = document.getElementById('all');
    const playerCount = ulElement.children.length;

    const playerExpenses = playerCount * perPlayerCost;
    playerExpensesField.innerText = playerExpenses;
})

document.getElementById('btn-total').addEventListener('click', function(){
    const managerCostString = document.getElementById('manager-cost').value;
    const managerCost = parseFloat(managerCostString);

    const coachCostString = document.getElementById('coach-cost').value;
    const coachCost = parseFloat(coachCostString);

    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const totalExpensesField = document.getElementById('total-expenses');

    const GrandTotal = playerExpenses + managerCost + coachCost;
    totalExpensesField.innerText = GrandTotal;
})