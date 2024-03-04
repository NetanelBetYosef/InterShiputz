/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_g99fyx8','template_uon8k89','#contact-form','hpc_Dl3MjhBRp_c26')
    .then(() => {
        contactMessage.textContent = '✅ ההודעה נשלחה בהצלחה'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = '❌ ההודעה לא נשלחה (שגיאת מערכת)'
    })
  }

  contactForm.addEventListener('submit', sendEmail)
