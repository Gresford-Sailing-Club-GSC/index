document.querySelector('.hamburger').addEventListener('click', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('nav ul');

    menu.classList.toggle('active');

    hamburger.classList.add('hidden');
    closeMenu.classList.add('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('nav ul');

    menu.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeMenu.classList.remove('active');
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

document.getElementById("membershipForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const fullName = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const membership = document.getElementById("membership").value;

    if (!fullName || !email || !phoneNumber || !membership) {
        alert("Please fill in all required fields.");
        return;
    }

    const payload = {
        to: email,
        subject: "Membership Application Received",
        email_body: `
        <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
        }
        .header img {
            max-width: 80px;
            margin-bottom: 10px;
        }
        .content {
            padding: 20px;
        }
        .content p {
            margin: 10px 0;
        }
        .content ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        .content ul li {
            margin: 5px 0;
        }
        .details {
            margin-top: 20px;
            padding: 15px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }
        .details p {
            margin: 5px 0;
        }
        .footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #666;
            background-color: #f9f9f9;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://raw.githubusercontent.com/Gresford-Sailing-Club-GSC/index/main/assets/logo/gsc-logo.jpg" alt="Gresford Sailing Club Logo">
            <h1>Gresford Sailing Club</h1>
        </div>
        <div class="content">
            <h2>Membership Application Received</h2>
            <p>Hello <strong>${fullName}</strong>,</p>
            <p>We are delighted to have you join the Gresford Sailing Club. Thank you for applying for the <strong>${membership}</strong> membership.</p>
            <p>Please find the payment instructions below:</p>
            <ul>
                <li><strong>If paying via Bank Transfer (BACS):</strong><br> 
                    <strong>Sort Code:</strong> 30-99-95<br> 
                    <strong>Account Number:</strong> 00084440<br> 
                    </li>
                <li><strong>If paying via Check:</strong><br> 
                    Cheques should be made payable to <strong>"Gresford Sailing Club"</strong> and left in an envelope addressed to the treasurer in the Clubhouse post box.</li>
            </ul>
            <p>After making your payment, please reply to this email with your <strong>payment reference</strong> or <strong>proof of payment</strong>. Once confirmed, we will send you a Microsoft Form to complete.</p>
            <p>In the meantime, please feel free to explore our website and check out our event timings.</p>
            <p>If you have any questions, feel free to contact us. We look forward to having you as part of the Gresford Sailing Club!</p>
            <p>Best regards,</p>
            <p><strong>Gresford Sailing Club</strong></p>
        </div>
        <div class="details">
            <p><strong>Your Details:</strong></p>
            <p>Full Name: ${fullName}</p>
            <p>Gender: ${gender}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Membership Type: ${membership}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        </div>
        <div class="footer">
            &copy; 2024 Gresford Sailing Club. All rights reserved.
        </div>
    </div>
</body>
</html>

        `
    };

    const logicAppUrl = "https://prod-13.ukwest.logic.azure.com:443/workflows/12f84e4d65b742e8b840149cfb8c7ac9/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hddHE7vlHtfRyxE4S8FdBEo2Ia4QBoFLvrKvTLKChSs"; 

    try {
        const response = await fetch(logicAppUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert("Your application has been submitted successfully!");
        } else {
            const errorDetails = await response.json();
            console.error("Error details:", errorDetails);
            alert("There was an error submitting your application. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error connecting to the server. Please try again.");
    }
});

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
