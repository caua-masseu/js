
class Login{
    static mat = null
    static pas = null
    static logado = false
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilocss = null
    static callback_ok = null
    static callback_n_ok = null
    static endpoint = "https://f8cf62fc-1aad-4375-9d6f-453f99f11da7-00-3b9ydihpj5yjf.janeway.replit.dev/"
    static config = {
        cor: "blue"
    }

    static login=(callback_ok, callback_n_ok, config=null)=>{
        if(config!= null){
            this.config = config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_n_ok=()=>{callback_n_ok()}
        this.estilocss = `*{border: none; padding: 0px; margin: 0px;box-sizing: border-box;} 
        .fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;} 
        .baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;} 
        .elementosLogin{ display: flex;justify-content: center; align-items: flex-start; flex-direction: column; width: 55%; background-color: #eee; padding: 10px; border-radius: 10px; box-sizing: inherit; } 
        .logoLogin{display: flex; justify-content: center; align-items: center; width: 50%;background-color: #bbb; padding: 10px;border-radius: 10px ;box-sizing: inherit;} 
        .logoLogin img{ width: 90%;box-sizing: inherit; } .campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;} 
        .campoLogin label{font-size: 18px;} 
        .campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;} 
        .botoesLogin{display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit;} 
        .botoesLogin button { cursor: pointer;background-color: ${this.config.cor}; color: #000 ;border-radius: 5px; padding: 10px;width: 100px ;box-sizing: inherit;}`
        
        const linkEstilo = document.createElement("style");
        linkEstilo.setAttribute("id", "id_estilologin")
        linkEstilo.innerHTML = this.estilocss
        document.head.appendChild(linkEstilo)

        const corpo = document.body

        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id", "fundoLogin")
        fundoLogin.setAttribute("class", "fundoLogin")
        corpo.prepend(fundoLogin)

        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id", "baseLogin")
        baseLogin.setAttribute("class", "baseLogin")
        fundoLogin.prepend(baseLogin)

        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id", "elementosLogin")
        elementosLogin.setAttribute("class", "elementosLogin")
        baseLogin.prepend(elementosLogin)

        const campoLogin1 = document.createElement("div")
        campoLogin1.setAttribute("class", "campoLogin")
        elementosLogin.appendChild(campoLogin1)

        const label1 = document.createElement("label")
        label1.innerHTML = "Username"
        campoLogin1.appendChild(label1)

        const input1 = document.createElement("input")
        input1.setAttribute("id", "f_username")
        input1.setAttribute("name","f_username")
        input1.setAttribute("type", "text")
        campoLogin1.appendChild(input1)

        const campoLogin2 = document.createElement("div")
        campoLogin2.setAttribute("class", "campoLogin")
        elementosLogin.appendChild(campoLogin2)

        const label2 = document.createElement("label")
        label2.innerHTML = "Senha"
        campoLogin2.appendChild(label2)

        const input2 = document.createElement("input")
        input2.setAttribute("id", "f_senha")
        input2.setAttribute("name","f_senha")
        input2.setAttribute("type", "password")
        campoLogin2.appendChild(input2)

        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("class", "botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btn_1 = document.createElement("button")
        btn_1.setAttribute("id", "btn_login")
        btn_1.innerHTML = "Login"
        btn_1.addEventListener("click", ()=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btn_1)

        const btn_2 = document.createElement("button")
        btn_2.setAttribute("id", "btn_cancelar")
        btn_2.innerHTML = "Cancelar"
        btn_2.addEventListener("click", ()=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_2)

    }

    static verificaLogin=()=>{
            const mat = document.getElementById("f_username").value
            const pas = document.getElementById("f_senha").value
            const endpoint = `https://f8cf62fc-1aad-4375-9d6f-453f99f11da7-00-3b9ydihpj5yjf.janeway.replit.dev/?matricula=${mat}&senha=${pas}`
            
            fetch(endpoint)
            .then(res => res.json())
            .then(res=>{
                if(res){
                    this.logado = true
                    this.matlogado = mat
                    this.nomelogado = res.nome
                    this.acessologado = res.acesso
                    this.callback_ok()
                }else{
                    this.logado = false
                    this.matlogado = null
                    this.nomelogado = null
                    this.acessologado = null
                    this.callback_n_ok()
                }
                this.fechar()
            })
    }

    static fechar=()=>{
        const fundoLogin = document.querySelector("#fundoLogin")
        fundoLogin.remove();
    }
}

// export { Login };