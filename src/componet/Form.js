import styles from './Form.module.css'
let value=0;
function Form(){
   
    const formCheck=(event)=>
    {
        console.log("I am clicked");
        event.preventDefault();
        let x=document.getElementById('fname').value
        let number=document.getElementById('number').value
        let showError=document.getElementById('showError')
        if (x ==="") {
            value=0;
            showError.innerText="1st fill the input box with your name"
        }
        if (number ==="") {
            value=0;
            showError.innerText=" fill the input box with your number"
        }
        if(number.length<10 || number.length>10)
        {
            value=0;
            showError.innerText="number  is not valid"
        }
       
        else
        {
            value=1;
            let mainForm=document.getElementById('mainForm')
            mainForm.submit()
        }
      
    }
    return (
        <>
        
        <div className={styles.formHolder}>
        <h1> Form for fill </h1>
        <form id="mainForm" onSubmit={formCheck}>
            <label >Full name:</label><br/>
            <input className={styles.inputbox}type="text" id="fname" 
            name="fname" placeholder='Enter your full name' /><br/>
          
            <label >Number:</label><br/>
            <input className={styles.inputbox}type="number" id="number" 
            name="numbe" placeholder='Enter your contract number' /><br/>
            <div class={styles.showError} id="showError"></div>
            <br/>
            <button class={styles.submitBtn} type="submit" >submit</button>
            <div class={styles.showError} id="showError"></div>
         </form> 
        </div>
         
        </>
        );
      
    
}  
  
  export default Form;