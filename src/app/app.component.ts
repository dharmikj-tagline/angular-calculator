import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';

  getval(val: number | string) {
    (document.getElementById('calculation') as HTMLInputElement).value += val;
  }

  resultenter(): void {
    var a: string = (document.getElementById('calculation') as HTMLInputElement)
      .value;
    document.addEventListener('keypress', (code) => {
      if (code.keyCode == 13) {
        var a = (document.getElementById('calculation') as HTMLInputElement)
          .value;
        var b = eval(a).toFixed(2);
        let c = Math.abs(eval(a));
        let val = b.substring(b.indexOf('.') + 1);
        if (val == 0o0) {
          (
            document.getElementById('calculation') as HTMLInputElement as any
          ).value = c;
        } else {
          (
            document.getElementById('calculation') as HTMLInputElement as any
          ).value = b;
        }
      }
    });
  }

  result(): void {
    let a: string = (document.getElementById('calculation') as HTMLInputElement)
      .value;
    (document.getElementById('calculation') as HTMLInputElement).value =
      eval(a).toFixed(2);
    var d: string = ((
      document.getElementById('calculation') as HTMLInputElement
    ).value = eval(a).toFixed(2));

    if (d.includes('.')) {
      (document.getElementById('calculation') as HTMLInputElement).value =
        eval(a);
    }
  }

  clear(): void {
    (document.getElementById('calculation') as HTMLInputElement).value = ' ';
  }

  back(): void {
    let a: string = (document.getElementById('calculation') as HTMLInputElement)
      .value;
    (document.getElementById('calculation') as HTMLInputElement).value =
      a.substr(0, a.length - 1);
  }

  noalphabet(evt: any): void {
    let a = evt.keyCode;
    console.log(typeof a);
    if (a >= 65 && a <= 90) {
      evt.preventDefault();
    } else if (a >= 97 && a <= 122) {
      evt.preventDefault();
    } else {
      (document.getElementById('calculation') as HTMLInputElement).value =
        evt.target.value;
    }
  }

  sameOperator(code: any): void {
    var a = (document.getElementById('calculation') as HTMLInputElement).value;
    var b = a.length - 1;
    var c = a.charAt(b);
    var d = a.length;
    var checkKeyCode = [187,189,56,191];

    if (c == '+') {
      if (code.keyCode == 187) {
        code.preventDefault();
      }
      else if(checkKeyCode.includes(code.keyCode)){
        (document.getElementById('calculation') as HTMLInputElement).value=a.slice(0,b);
      }
    } else if (c == '-') {
      if (code.keyCode == 189) {
        code.preventDefault();
      }
      else if(checkKeyCode.includes(code.keyCode)){
        (document.getElementById('calculation') as HTMLInputElement).value=a.slice(0,b);
      }
    } else if (c == '*') {
      if (code.keyCode == 56) {
        code.preventDefault();
      }
      else if(checkKeyCode.includes(code.keyCode)){
        (document.getElementById('calculation') as HTMLInputElement).value=a.slice(0,b);
      }
    } else if (c == '/') {
      if (code.keyCode == 191) {
        code.preventDefault();
      }
      else if(checkKeyCode.includes(code.keyCode)){
        (document.getElementById('calculation') as HTMLInputElement).value=a.slice(0,b);
      }
    }
  }
}
