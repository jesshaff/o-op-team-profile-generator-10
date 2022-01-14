// Create manager card
const generateManager = function(manager) {
    return `
    <div> class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            
            <div class="card-body">
                <p class="employeeId">ID: ${manager.employeeId}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            </div>

        </div>
    </div>
    `;
}