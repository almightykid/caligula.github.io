import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  constructor(private router: Router) {

  }

  kubectl_snippet_one=`kubectl exec etcd-master -n kube-system etcdctl get / --prefix -key-only`

}

