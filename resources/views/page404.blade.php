@extends('layouts.master')

@section('page-title', "Charts")

@section('main-content')
    <div id="not-found"></div>

    <script async defer src="{{asset("dist/pagenotfound/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/pagenotfound/bundle.js")}}"></script>
@endsection