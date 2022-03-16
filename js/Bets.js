class Bet {
    constructor() {
        this.chips = document.querySelectorAll('.chips');
        this.playerCredit = document.querySelector('.credit');      // starting value 1000$
        this.value = 0;
        this.gameOver = false;
    }
    clicks() {
        for (let i = 0; i < this.chips.length; i++) {
            this.chips[i].addEventListener('click', this.placeYourBets);
        }
    }
    removeClicks() {
        for (let i = 0; i < this.chips.length; i++) {
            this.chips[i].removeEventListener('click', this.placeYourBets);
        }
    }
    placeYourBets() {
        let betPlaced = document.querySelector('.betPlaced');     // img in the center of the board where bets are placed
        betPlaced.style.visibility = 'visible';
        betPlaced.setAttribute('src', this.getAttribute('src'));
        bet.playerCredit.innerHTML = parseInt(bet.playerCredit.innerHTML) - parseInt(this.id) + ' €';
        bet.value = bet.value + parseInt(this.id);
        if (parseInt(bet.playerCredit.innerHTML) <= 0){
            bet.playerCredit.innerHTML = 0  + ' €';
            bet.removeClicks();
            // this.newGameBtn.removeEventListener('click',this.newGameListener); // treba srediti da se izgubi dugme na kraju igre
            checkWin.messageEl.innerHTML = 'You dont have enough credit';
            this.gameOver = true;
        }
    }
    whoWonChips() {
        let playerCredit = document.querySelector('.credit');
        if (checkWin.messageEl.innerHTML === 'You won') {
            playerCredit.innerHTML = parseInt(playerCredit.innerHTML) + 2 * parseInt(this.value) + ' €';
        } else if (checkWin.messageEl.innerHTML === 'You lost') {
            playerCredit.innerHTML = parseInt(playerCredit.innerHTML) + ' €';
        }else{
            playerCredit.innerHTML = parseInt(playerCredit.innerHTML) + parseInt(this.value) + ' €';
        }
    }
}

let bet = new Bet();