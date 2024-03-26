const details = () => {
    return (
        <div>\
        <h3>Contact Us</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name" />

    <label for="email">Email</label>
    <input type="text" id="lname" name="email" placeholder="Your email" />

     
    <label for="contact">Contact</label>
    <input type="text" id="number" name="number" placeholder="Your contact  number" />
 
    <input type="submit" value="Submit" />
  </form>
</div>
</div>
         );
}
 
export default details ;