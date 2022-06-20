
let array1 = ["tienng@fpt.edu.vn", "datlt@fpt.edu.vn"];
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const show_username = $("#show_username");
const input = $("#input");
const submit = $("#submit");
const input_xoa = $("#input_xoa");
const xoa = $("#xoa");
const xoa_all = $("#xoa_all");

function show_msg(msg) {
    console.log(msg);
}


function add_User(user12) {
    array1.push(user12)
};

function remove_user_() {
    xoa.onclick = () => {

        let id_xoa = document.querySelector(".id_d");
        let xoa_id = id_xoa.getAttribute("data-index");
        if (input_xoa.value == "") {
            error_("Bạn chưa nhập vào user", "error_xoa")

        }
        else if (xoa_id == array1.indexOf(input_xoa.value)) {

            console.log(array1.indexOf(xoa_id))
            deleteee(xoa_id)
            show_User();
            input_xoa.value = null;
            error_("Xóa thành công", "error_xoa")


        }
        else if (array1.includes(input_xoa.value) == false) {
            error_("Không tìm thấy User để xóa", "error_xoa");

        }
        else {
            error_("", "error_xoa")
        }
    }

}
function deleteee(index) {

    array1.splice(index, 1);
}

function delete_All() {

    xoa_all.onclick = () => {
        array1 = [];
        show_User();
        error_("Đã xóa hết user", "error_xoa")

    }
}
function show_User() {
    if (array1.length == 0) {
        show_msg("Không có user để hiển thị");
    } else {
        const html = array1.map((value, index) => ` <tr>
                <td class="id_d" data-index="${index}">${index + 1}</td>
                <td>${value}</td>
            </tr>`).join('');

        show_username.innerHTML = html

    }
}
function init() {

    submit.onclick = () => {
        let temp = true;
        if (input.value == "") {
            error_("Bạn chưa nhập thông tin", "error_");
            temp = false;
        }
        else if (input.value.length < 5) {
            error_("Tên user ngắn", "error_");
            temp = false;
        }
        else {
            error_("", "error_");

        };
        if (temp == false) {
            return false
        }

        else {
            let new_input_ = input.value;
            add_User(new_input_);
            show_User();
            input.value = null;
            input.focus();
        }
    }
    show_User();
}
let id_user_upadet=$(".id_user_upadet");
let upade_input=$(".upade_input");
let upade_button=$(".upade_button");
let btn_add_sua=$(".btn_add_sua");

function update__(){
   

    
    btn_add_sua.onclick=function(){
        let hidden_i=$(".hidden_i");
                hidden_i.style.display="none";
                let block=$(".block");
                block.style.display="block";
        if(id_user_upadet.value==""){
            error_("Bạn chưa nhập thông tin", "error_upadet");
            return false;
        }
        else if (array1.includes(id_user_upadet.value)==false){
            error_("Không tìm thấy tài khoản", "error_upadet");
            return false;
        }
        else if (array1.includes(id_user_upadet.value)){

            let upadate_input_new=id_user_upadet.value;
            upade_input.value=upadate_input_new;
            upade_button.onclick=function(){
                

                array1[array1.indexOf(id_user_upadet.value)]=upade_input.value;
                
                show_User();
                id_user_upadet.value = null;
                id_user_upadet.focus();
            }
            

        }
    }
    
}
update__();
init();
delete_All()
remove_user_()
let error_ = (msg, element) => {
    document.getElementById(element).innerHTML = msg;
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.fontSize = "15px";
}
 



