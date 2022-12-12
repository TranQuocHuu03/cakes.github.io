function listproduct(){
                for (let i in product) {
                    var demo = '<div class="col-3">';
                        demo +='<div class="card" style="width: 18rem;">';
                            demo +='<img class="card-img-top" src="' +product[i].img+ 'alt="Card image cap">';
                            demo +='<div class="card-body">'   
                            demo +='<h5 class="card-title">'+product[i].Name+'</h5>';
                            demo +='<p class="card-text">'+product[i].Price+"    "+ '<del> '+ product[i].Prices  +'</p>';
                            demo +='<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
                            demo += '</div>';
                            demo += '</div>';
                            demo +='</div>';
                            console.log(product[i]);
                            document.getElementById('banh').innerHTML += demo;
                }
                for (let i in products) {
                    var demo = '<div class="col-3">';
                        demo +='<div class="card" style="width: 18rem;">';
                            demo +='<img class="card-img-top" src="' +products[i].img+' alt="Card image cap">'; 
                            demo += '</div>';
                            demo += '</div>';
                            demo +='</div>';
                            console.log(products[i]);
                            document.getElementById('banhs').innerHTML += demo;
                }
                            }
                function datmua() {
                    alert("Đặt mua thành công !")
                }