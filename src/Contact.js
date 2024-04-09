const details = () => {
    return (
     <section id="contact" >

        <div >
        <h3>Contact Us</h3>

<div class="container">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name" />

    <label for="email">Email</label>
    <input type="text" id="lname" name="email" placeholder="Your email" />

     
    <label for="contact">Contact</label>
    <input type="text" id="number" name="number" placeholder="Your contact  number" />
 
    <input type="submit" value="Submit" />

</div>
</div>
</section>
         );
}
 
export default details ;