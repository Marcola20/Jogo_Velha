$(function(){
    $(document).on('click', 'button.btn', function() {  
        let jogada = $('#jogador').text();              
        
        mudar_jogada(jogada);
        
        let jogador = $(this).text(jogada);

        if(jogador.text() == 'X') {
            $(this).addClass('clicarX').removeClass('clicarO');
        } else {
            $(this).addClass('clicarO').removeClass('clicarX');
        }
        
        $(this).attr('disabled', true);
        
        vencedor();
    });
    
    $(document).on('click', 'button.reiniciar', function(){
        window.location.reload();
        history.go(0);
    })
})

let mudar_jogada = (jogada) => {
    if(jogada == 'X') {
        $('#jogador').text('O');
        $('#vezDe').text('Vez do O');
    } else{
        $('#jogador').text('X');
        $('#vezDe').text('Vez do X');
    }

}

let vencedor = () => {
    vitHorizont();
    vitVertic();
    vitDiag();
}

// Horizontais
let vitHorizont = () => {
    let combinacao = '';
    
    combinacao = $('#11').text() + $('#12').text() + $('#13').text() ;
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!');
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!');
        fimDeJogo();
    }

    combinacao = $('#14').text() + $('#15').text() + $('#16').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!')
        fimDeJogo();
    } 

    combinacao = $('#17').text() + $('#18').text() + $('#19').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!')
        fimDeJogo();
    } 
}

// Verticais
let vitVertic = () => {
    let combinacao = ''
    
    combinacao = $('#11').text() + $('#14').text() + $('#17').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        fimDeJogo();
    } 

    combinacao = $('#12').text() + $('#15').text() + $('#18').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!')
        fimDeJogo();
    } 

    combinacao = $('#13').text() + $('#16').text() + $('#19').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!')
        fimDeJogo();
    } 

}

// Diagonais
let vitDiag = () => {
    let combinacao = ''
    
    combinacao = $('#11').text() + $('#15').text() + $('#19').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador X venceu!')
        $('.btn').off('click');
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O jogador O venceu!')
        fimDeJogo();
    } 

    combinacao = $('#13').text() + $('#15').text() + $('#17').text() 
    
    if(combinacao == 'XXX') {
        $('#vezDe').hide();
        $('#resultado').text('O Jogador X venceu!')
        fimDeJogo();
    } else if(combinacao == 'OOO') {
        $('#vezDe').hide();
        $('#resultado').text('O Jogador O venceu!')
        fimDeJogo();
    } 
}

// Para o jogo quando alguém vence
let fimDeJogo = () => {
    $(document).ready(function () {
   
        $(".btn").click(function () {
            
            if(!$(this).disabled){
    
                $(this).prop('disabled', true);
            }
        })
    })
}
