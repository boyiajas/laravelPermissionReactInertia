<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Inertia\Inertia;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        //dd($request->user()->getPermissionNames());
        $permissions = Permission::latest()->paginate(6);
       
        return Inertia::render('Admin/Permissions/Index', compact('permissions'))->with('1', (request()->input('page', 1) -1) * 5);


        /* return view('admin.permissions.index', [
            'permissions' => $permissions
        ]); */
    }

    public function show(Permission $permission)
    {
        return Inertia::render('Admin/Permissions/Show',compact('permission'));
    }

    /**
     * Show form for creating permissions
     * 
     * @return \Illuminate\Http\Response
     */
    public function create() 
    {   
        //return view('admin.permissions.create');
        return Inertia::render('Admin/Permissions/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        //return $request->all();
        //dd($request->all());
        $request->validate([
            'name' => 'required|unique:permissions'
        ]);

        Permission::create($request->only('name'));

        return redirect()->route('permissions.index')->withSuccess(__('Permission created successfully.'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Permission  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Permission $permission)
    {
        return Inertia::render('Admin/Permissions/Edit',compact('permission'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $permission = null)
    {
        dd($permission, $request->all());
        $request->validate([
            'name' => 'required|unique:permissions,name,'.$permission
        ]);

        //Permission

        //$permission->update($permission);

        return redirect()->route('permissions.index')
            ->withSuccess(__('Permission updated successfully.'));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        try {
            $permission->delete();
        
            return response()->json(['message' => 'Permission deleted successfully'], 200);
        } catch (\Exception $e) {
            
            return response()->json(['error' => 'Failed to delete permission'], 500);
        }
    }
}
