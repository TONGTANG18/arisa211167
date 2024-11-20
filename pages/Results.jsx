import React from "react";
import {useLocation} from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;
  
    let salary = formData.salary* 12;
    let allsalary = salary +formData.bonus*1;
    let expenses = allsalary * 0.5 <= 100000 ? allsalary *0.5 : 100000
    let child = formData.child * 30000 <= 60000 ? formData.child * 30000 : 60000; 
    let security = formData.security * 12 <= 30000 ? formData.security * 12 :30000;
    let insurance = formData.insurance <= 100000 ? formData.insurance :100000;
    let deduction = 60000 + child+ security+ insurance *1;
    let income = allsalary-expenses-deduction;
    let taxrate = 0;
    if (income <= 100000){
      taxrate = 0;
    }
    else if (income <= 300000){
      taxrate = 0.05;
    }
    else if (income <= 300000){
      taxrate = 0.10;
    }
    else{
      taxrate = 0.15;
    };

    let taxpay = taxrate * income;
  return (
    <div className="min-h-screen bg-gray flex itens-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            ผลการคำนวณภาษี
        </h1>
        <p className="text-lg">
        <strong className="text-black-600">เงินได้ทั้งปี: {salary} บาท</strong>
        </p>
        <p className="text-lg">
        <strong className="text-black-600">ค่าใช้จ่าย: {expenses} บาท</strong>
        </p>  
        <p className="text-lg">
        <strong className="text-black-600">ค่าลดย่อน: {deduction} บาท</strong>
        </p>  
        <p className="text-lg">
        <strong className="text-black-600">เงินได้พึงประเมนสุทธิ: {income} บาท</strong>
        </p>  
        <p className="text-lg">
        <strong className="text-black-600">อัตราภาษี: {taxrate} %</strong>
        </p>  
        <p className="text-lg">
        <strong className="text-black-600">ภาษีที่ต้องชำระ: {taxpay} บาท</strong>
        </p>      
    </div> 

  );
};

export default Results;