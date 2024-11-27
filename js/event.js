function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();


    const activityType = document.getElementById("activityType").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;


    if (!activityType || !name || !email || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    const payload = {
        to: email,
        subject: `Booking Confirmation for ${activityType}`,
        email_body: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                .header {
                    background-color: #d8f0ff;
                    color: black;
                    text-align: center;
                    padding: 20px;
                }
                .content {
                    padding: 20px;
                }
                .footer {
                    text-align: center;
                    padding: 15px;
                    font-size: 12px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <h1>Gresford Sailing Club</h1>
                </div>
                <div class="content">
                    <h2>Booking Confirmation</h2>
                    <p>Dear <strong>${name}</strong>,</p>
                    <p>Thank you for booking the <strong>${activityType}</strong> event with Gresford Sailing Club. Here are your booking details:</p>
                    <ul>
                        <li><strong>Event:</strong> ${activityType}</li>
                        <li><strong>Date:</strong> ${date}</li>
                    </ul>
                    <p>We look forward to seeing you at the club!</p>
                    <p>If you have any questions or need to make changes to your booking, feel free to reply to this email.</p>
                </div>
                <div class="footer">
                    &copy; 2024 Gresford Sailing Club. All rights reserved.
                </div>
            </div>
        </body>
        </html>
        `
    };

    const logicAppUrl = "https://prod-30.ukwest.logic.azure.com:443/workflows/50c5bba9ffb04daa8c04ccef3d1624d2/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=z1aA7YnTpO3QmuCGoL_SNM4Mna_vuzWsZNMfqUaVLsc"; 

    try {
        const response = await fetch(logicAppUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert("Your booking has been confirmed! A confirmation email has been sent.");
            document.getElementById("bookingForm").reset(); 
        } else {
            const errorDetails = await response.json();
            console.error("Error details:", errorDetails);
            alert("There was an error processing your booking. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error connecting to the server. Please try again.");
    }
});
