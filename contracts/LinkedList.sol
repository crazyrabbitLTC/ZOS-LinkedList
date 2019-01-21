pragma solidity >=0.4.24 <0.6.0;

import "zos-lib/contracts/Initializable.sol";

contract LinkedList is Initializable{

    event EntryAdded(bytes32 head, string data, bytes32 next);
    
    //Struct will be our Node 
    struct Node {
        bytes32 next;
        string data;
    }
    
    
    //Mappping will hold nodes
    mapping (bytes32 => Node) public nodes;
    
    //Length of LinkedList (initialize with constructor/initalizer)
    uint public length;
    
    //Head of list;
    bytes32 public head;
    
    //Name of LinkedList (the purpose for the list)
    string public listName;

    function initialize(string memory _listName) initializer public {    
        require(bytes(_listName).length >= 0);
        length = 0;
        listName = _listName;
    }
    
    function addNode(string memory _data) public returns (bool){
        Node memory node = Node(head, _data);
        bytes32 id = keccak256(abi.encodePacked(node.data, length, now));
        nodes[id] = node;
        head = id;
        length = length+1;
        
        emit EntryAdded(head, node.data, node.next);
    }
    
    //popNode
    function popHead() public returns (bool) {
        require(length > 0, "error...head is empty");
        //hold this to delete it
        bytes32 newHead = nodes[head].next;
        //delete it
        delete nodes[head];
        head = newHead;
        length = length-1;
    }
    
    //Contract interface
    function getNodeExternal(bytes32 _node) external view returns (bytes32, string memory){
        return (nodes[_node].next, nodes[_node].data);
    }

    
}
