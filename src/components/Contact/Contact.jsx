import "./contact.scss"

export default function Contact() {
  return (
    <div id="contact">
  <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
      
    </div>
  );
}
