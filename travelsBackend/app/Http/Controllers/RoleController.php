<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $roles = Role::all();
            if($roles->isEmpty()){
                throw new \Exception('No rols founded.');
            }
            return response()->json($roles);
        } catch (\Exception $e){
            return response()->json(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $request->validate([
                'rol' =>'required|string|unique:roles',
            ]);
            $rol = Role::create($request->all());
            return response()->json($rol, 201);
        } catch (\Exception $e){
            return response()->json(['error 400' => 'The arguments for creating a Rol are insufficient'], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try{
            $rol = Role::findOrFail($id);
            return response()->json($rol);
        } catch (\Exception $e){
            return response()->json(['error 404' => 'Rol was not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $rol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
            $request->validate([
                'rol' =>'required|string|unique:rols,'.$id,
            ]);
            $rol = Role::findOrFail($id);
            $rol->update($request->all());
            return response()->json($rol);
        } catch(\Exception){
            return response()->json(['error 404' => 'Rol was not updated'], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try{
            $rol = Role::findOrFail($id);
            $rol->delete();
            return response()->json(['message' => 'Rol was deleted'], 204);
        } catch (\Exception $e){
            return response()->json(['error 404' => 'Rol was not found'], 404);
        }
    }
}
