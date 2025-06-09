let userform=document.getElementById('user-form');
const retrieveEntries=()=>{
    let entries=localStorage.getItem('userEntries');
    if(entries){
        entries=JSON.parse(entries);
    }
    else{
        entries=[]
    };
return entries    
};
let userEntries=retrieveEntries();
const DisplayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='name'>${entry.name}</td>`;
        const emailCell = `<td class='email'>${entry.email}</td>`;
        const passwordCell = `<td class='password'>${entry.password}</td>`;
        const dobCell = `<td class='dob'>${entry.dob}</td>`;
        const acceptCell = `<td class='accept'>${entry.accept}</td>`;
        const row = `<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${acceptCell}</tr>`;
        return row;
    }).join('\n');

    const table = `
        <table class=lass="table-auto" style="border-spacing: 15px;" border="1">Entries
            <tr>
                <th class='px-8 py-2' "padding: 10px">Name</th>
                <th class='px-8 py-2' "padding: 10px">Email</th>
                <th class='px-8 py-2'>Password</th>
                <th class='px-8 py-2'>DOB</th>
                <th class='px-8 py-2'>Accepted Terms?</th>
            </tr>
            ${tableEntries}
        </table>`;
    document.getElementById('user-entries').innerHTML = table;
};
const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const dob=document.getElementById('date').value;
    const accept=document.getElementById('accept').checked;

    entry={
        name,
        email,
        password,
        dob,
        accept
    };
    userEntries.push(entry);
    localStorage.setItem('userEntries',JSON.stringify(userEntries));
    DisplayEntries();
}
userform.addEventListener('submit', (event) => saveUserForm(event));
DisplayEntries();
