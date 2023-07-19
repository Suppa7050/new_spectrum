import React from 'react';
// import "./Front.css"
import "./dump.css"
const Navbarltst = () => {
	const handleWhatsAppShare = () => {
		const url = window.location.href;
		const encodedUrl = encodeURIComponent(url);
		const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
		window.open(whatsappUrl,'_blank');
	};
	return (
		//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
		//   <div class="container-fluid">
		//     <a class="navbar-brand" href="#">Navbar</a>
		//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		//       <span class="navbar-toggler-icon"></span>
		//     </button>
		//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
		//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		//         <li class="nav-item">
		//           <a class="nav-link active" aria-current="page" href="#">Home</a>
		//         </li>
		//         <li class="nav-item">
		//           <a class="nav-link" href="#">Link</a>
		//         </li>
		//         <li class="nav-item dropdown">
		//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		//             Dropdown
		//           </a>
		//           <ul class="dropdown-menu">
		//             <li><a class="dropdown-item" href="#">Action</a></li>
		//             <li><a class="dropdown-item" href="#">Another action</a></li>
		//             <li><hr class="dropdown-divider"/></li>
		//             <li><a class="dropdown-item" href="#">Something else here</a></li>
		//           </ul>
		//         </li>
		//         <li class="nav-item">
		//           <a class="nav-link disabled">Disabled</a>
		//         </li>
		//       </ul>
		//       <form class="d-flex" role="search">
		//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		//         <button class="btn btn-outline-success" type="submit">Search</button>
		//       </form>
		//     </div>
		//   </div>
		// </nav>
		<nav class="navbar navbar-expand-lg bg-light navbar-light">
			<div class="container-fluid">
			<a href="/" class='logo'><img src="https://img.freepik.com/free-vector/shining-bright-light-bulb-with-cogs_3446-347.jpg?size=626&ext=jpg" alt="LOGO" height="40px" width="40px"/></a>
			<h className="navbar-brand title" style={{ fontSize: '24px', padding: '1%' }}>New Spectrum</h>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						
						{/* <li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Main</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Other</a>
						</li> */}
						{/* <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
							aria- expanded="false">Menu</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li>
								<a class="dropdown-item" href="#">First Item</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Second Item</a>
							</li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li>
								<a class="dropdown-item" href="#">Last Item</a>
							</li>
						</ul>
					</li> */}
						{/* <li class="nav-item">
							<a class="nav-link disabled">Disabled Link</a>
						</li> */}
					</ul>
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item d-flex">
							<a class="nav-link active" href="/about">AboutUs</a>
							<a class="nav-link active" href="/profile">profile</a>
							<a class="nav-link active" onClick={handleWhatsAppShare}>Share</a>
						</li>
						{/* <li class="nav-item d-flex">
							<a class="nav-link active" aria-current="page" href="signup">Signup</a>
						</li> */}
					{/* <form class="d-flex">
						<input class="form-control me-2" type="search" placeholder="Search" />
						<button class="btn btn-success" type="submit">Search</button>
					</form> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbarltst;
