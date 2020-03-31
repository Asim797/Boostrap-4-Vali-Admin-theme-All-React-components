@extends('layouts.master')

@section('page-title', "Cards")

@section('main-content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-laptop"></i> Cards</h1>
                <p>Material design inspired cards</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">UI</li>
                <li class="breadcrumb-item"><a href="#">Cards</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-6" id="simple-card"></div>
            <div class="col-md-6" id="add-item-card"></div>
            <div class="clearfix"></div>
            <div class="col-md-6" id="add-remove-item-card"></div>
            <div class="col-md-6" id="loading-card"></div>
        </div>
    </main>

    <script async defer src="{{asset("dist/simplecard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/simplecard/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/additemcard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/additemcard/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/addremoveitemcard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/addremoveitemcard/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/loadingcard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/loadingcard/bundle.js")}}"></script>
@endsection